require(ggplot2)
require(dplyr)
require(lubridate)
require(tidyr)
require('rgdal')
require('maptools')
require('mapproj')
require('ggmap')
require('extrafont')
require('plyr')
source('cctheme.R')
gpclibPermit()

overview<-read.csv("NatAMI_Urban_Ed_Ins_NW_c.csv")
stringsAsFactor= FALSE
str(overview)
head(overview)

years<-read.csv("Nat_AMI_2008-14.csv")
stringsAsFactor= FALSE
str(overview)
head(years)

yearsSMI<-read.csv("Nat_SMI_2008-14c.csv")
stringsAsFactor= FALSE
str(overview)
head(yearsSMI)

overviewtot<-select(overview, Char, Total)
head(overviewtot)

#to get rows for total and FPL
overviewUSFPL1<-overview %>%
  filter(Char== 'Less Than 100 FPL')
head(overviewUSFPL1)

overviewUSFPL<-overview %>%
  filter(Char=='U.S.') 
head(overviewUSFPL)

overviewUSFPL2 <- rbind(overviewUSFPL1, overviewUSFPL)
head(overviewUSFPL2)

overviewFPL<-gather(overviewUSFPL2, charact, percent, Total:Aged.50.)
head(overviewFPL)

#bar chart - by region, AMI 
region<-ggplot(overviewtot[2:5,], aes(reorder(x=Char, Total), y=Total))+
  geom_bar(stat="identity", width=.2, fill="green")+
    xlab("Region")+
    ylab("Percent")+
    scale_y_continuous(limits=c(0,20)) +
  cctheme+
    ggtitle("NE, S, MW, W: Regional Location for Adults with AMI, 2014")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.8)))
print(region)
ggsave("region.pdf")

#geom_polygon - bring in county info
#note fortify - check column headings
tracts<-readOGR(dsn='region', layer='cb_2014_us_region_20m')
tracts<-fortify(tracts, region='NAME')
head(tracts)

#join overview and tracts
regionmap<-left_join(overview[2:5,], tracts, by=c("Char"="id"))
head(regionmap)

regionmap_plot <-ggplot(regionmap, aes(x=long, y=lat, group=group, fill=Total))+
  geom_polygon(color='#6E6E6E', size=.5)+
    coord_map()+
  scale_fill_gradient(low="#FFEFD5", high="#FF6347")+
    ggtitle("Regional Location for Adults with AMI, 2014")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(1.2)))
print(regionmap_plot)
ggsave("AMI by Region Map.pdf", width=11, height=6)

#bar chart_urban or rural AMI
urban<-ggplot(overviewtot[11:13,], aes(x=Char, y=Total))+
  geom_bar(stat="identity", width=.2, fill="purple")+
  cctheme+
  xlab("Location")+
  ylab("Percent")+
  ggtitle("Urban/Rural Location for Adults with AMI, 2014")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.8)))
print(urban)
ggsave("urban.pdf")

#bar chart_health care insurance type AMI
insurance<-ggplot(overviewtot[18:21,], aes(x=Char, y=Total))+
  geom_bar(stat="identity", width=.2, fill="blue")+
  cctheme+
  xlab("Type of Insurance")+
  ylab("Percent")+
  ggtitle("Health Insurance Coverage Type for Adults with AMI, 2014")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.8)))
print(insurance)
ggsave("insurance.pdf")

#geom_line total compared to 100% belowFPL
FPL<-ggplot(overviewFPL, aes(reorder(x=Char, percent), y=percent, group=charact, color=charact))+
    geom_line(width=2)+
  scale_y_continuous(lim=c(0, 30))+
      cctheme+
  xlab("Population")+
  ylab("Percent")+
  ggtitle("Adults Below the Federal Poverty Level with AMI Compared to All Adults with AMI, 2014")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.8)))
print(FPL)
ggsave("BelowFPL.pdf", width =5, height=6)

#plotting same with geom_bar
FPLbar<-ggplot(overviewFPL, aes(x=charact, y=percent, fill=Char, order=Char))+
  geom_bar(stat="identity", position='dodge', width = .6)+
    cctheme+
  scale_fill_brewer()+
     xlab("Population")+
      ylab("Percent")+
  ggtitle("Adults Below the Federal Poverty Level with AMI Compared to All Adults with AMI, 2014")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.75)))
print(FPLbar)
ggsave("BelowFPLBar.pdf", width =5, height=6)

#timeline for AMI 2008-2014
years_ages<-gather(years, Year, Percent, X2008:X2014)
str(years_ages)
head (years_ages)

yearsAMI<-ggplot(years1, aes(x=Year, y=Percent, group=Age, color=Age))+
  geom_line(width=2)+
      scale_y_continuous(limits=c(0, 30))+
  ggtitle("AMI by Age, 18 and Older, by Years 2008-2014")+
    cctheme+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.8)))
print(yearsAMI)
ggsave("yearsAMI.pdf", width=7, height=4)

#timeline for SMI 2008-2014
yearsSMI<-gather(yearsSMI, Year, Percent, X2008:X2014)
str(yearsSMI)
head (yearsSMI)

yearsSMI<-ggplot(yearsSMI, aes(x=Year, y=Percent, group=Age, color=Age))+
  geom_line(width=2)+
      scale_y_continuous(limits=c(0, 30))+
  ggtitle("SMI by Age, 18 and Older, by Years 2008-2014")+
      cctheme+
      theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.65)))
print(yearsSMI)
ggsave("yearsSMI.pdf", width=7, height=4)

#geom_area AMI by year
yearsAMI_plot<-ggplot(years_ages, aes(x=Year, y=Percent, fill=Age, group=Age))+
    geom_area(stat="identity")+
  ggtitle("AMI by Age, 18 and Older, by Years 2008-2014")+
  cctheme+
  scale_y_continuous(limits=c(0, 100))+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.8)))
print(yearsAMI_plot)
ggsave("yearsAMIplot.pdf")

#geom_area for all AMI (total 18 and older) for each year 
years2<-filter(years_ages, Age=='Total 18 or Older')
head(years2)
yearsAMItot_area<-ggplot(years2, aes(x=Year, y=Percent, group=Age, color=Age))+
  geom_area(fill="#CD8500", color="#CD8500")+
  ggtitle("AMI 18 Years and Older, Years 2008-2014")+
  cctheme+
  scale_y_continuous(limits=c(0, 100))+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.8)))
print(yearsAMItot_area)
ggsave("yearsAMItotalarea.pdf")

#images

years2<-filter(years1, Age=='Total 18 or Older')
head(years2)
yearsAMItot_people<-ggplot(years2, aes(x=Year, y=Percent, group=Age, color=Age))+
  geom_path(fill="#CD8500", color="#CD8500")+
  ggtitle("AMI 18 Years and Older, Years 2008-2014")+
  cctheme+
  scale_y_continuous(limits=c(0, 100))+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.8)))
print(yearsAMItot_people)