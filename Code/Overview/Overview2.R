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

#AMI
overview<-read.csv("NatAMI_Urban_Ed_Ins_NW_c.csv")
stringsAsFactor= FALSE
str(overview)
head(overview)

#SMI
overviewSMI<-read.csv("NatSMI_Urban_Ed_Ins_NW_c.csv")
stringsAsFactor= FALSE
str(overviewSMI)
head(overviewSMI)

#AMI years
years<-read.csv("Nat_AMI_2008-14.csv")
stringsAsFactor= FALSE
str(overview)
head(years)

#SMI years
yearsSMI<-read.csv("Nat_SMI_2008-14c.csv")
stringsAsFactor= FALSE
str(overview)
head(yearsSMI)

overviewtot<-select(overview, Char, Total)
head(overviewtot)

#SUD overlaps with AMI and SUD
SUDAMISMI<-read.csv("AMI_SMI_SUD_intheGeneralPopc.csv")
stringsAsFactor= FALSE
str(overview)
head(SUDAMISMI)

#AMI to get rows for AMI adults below FPL
overviewUSFPL1<-overview %>%
  filter(Char== 'Less Than 100 FPL')
head(overviewUSFPL1)

#AMI to get rows for total adults AMI 
overviewUSFPL<-overview %>%
  filter(Char=='U.S.') 
head(overviewUSFPL)

#rbind AMI total and AMI below FPL
overviewUSFPL2 <- rbind(overviewUSFPL1, overviewUSFPL)
head(overviewUSFPL2)

overviewFPL<-gather(overviewUSFPL2, charact, percent, Total:Aged.50.)
head(overviewFPL)

#SMI do the same as above
overviewSMIFPL<-overviewSMI %>%
  filter(Socioeconomic=='Less Than 100%')
head(overviewSMIFPL)

overviewUSSMIFPL<-overviewSMI %>%
  filter(Socioeconomic=='TOTAL') 
head(overviewUSSMIFPL)

overviewSMIFPL2 <- rbind(overviewSMIFPL, overviewUSSMIFPL)
head(overviewSMIFPL2)

overviewSMIFPL3<-gather(overviewSMIFPL2, age, percent, Total:Aged.50.)
head(overviewSMIFPL3)

#bar chart: AMI numbers by region, note have to cut this by population to get rate
region<-ggplot(overviewtot[2:5,], aes(reorder(x=Char, Total), y=Total))+
  geom_bar(stat="identity", width=.2, fill="green")+
    xlab("Region")+
    ylab("Percent")+
    scale_y_continuous(limits=c(0,20)) +
  cctheme+
    ggtitle("NE, S, MW, W: Regional Location for Adults with AMI, 2014")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.65)))
print(region)
ggsave("draftregion.pdf")

#geom_polygon - bring in county info - again need to work out rate
#note fortify - check column headings
tracts<-readOGR(dsn='region', layer='cb_2014_us_region_20m')
tracts<-fortify(tracts, region='NAME')
head(tracts)

#join overview and tracts
regionmap<-left_join(overview[2:5,], tracts, by=c("Char"="id"))
head(regionmap)

#map by 4 regions - however this is population NOT rate 
#not pursuing this now
regionmap_plot <-ggplot(regionmap, aes(x=long, y=lat, group=group, fill=Total))+
  geom_polygon(color='#6E6E6E', size=.5)+
    coord_map()+
  scale_fill_gradient(low="#FFEFD5", high="#FF6347")+
    ggtitle("Regional Location for Adults with AMI, 2014")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(1.2)))
print(regionmap_plot)
ggsave("draftAMI by Region Map.pdf", width=11, height=6)

#bar chart_urban or rural AMI: not pursuing this and probably need to think about rate here
urban<-ggplot(overviewtot[11:13,], aes(x=Char, y=Total))+
  geom_bar(stat="identity", width=.2, fill="purple")+
  cctheme+
  xlab("Location")+
  ylab("Percent")+
  ggtitle("Urban/Rural Location for Adults with AMI, 2014")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.7)))
print(urban)
ggsave("drafturban.pdf")

#bar chart_health care insurance type AMI - point of this is that
#20% don't have coverage, however not pursuing this one right now, insurance coverage changing so quickly 
insurance<-ggplot(overviewtot[18:21,], aes(x=Char, y=Total))+
  geom_bar(stat="identity", width=.2, fill="blue")+
  cctheme+
  xlab("Type of Insurance")+
  ylab("Percent")+
  ggtitle("Health Insurance Coverage Type for Adults with AMI, 2014")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.65)))
print(insurance)
ggsave("draftinsurance.pdf")

#geom_line total AMI compared to 100% belowFPL
#significant that if below poverty level higher AMI, and ppt increases with age
FPL<-ggplot(overviewFPL, aes(x=charact, y=percent, color=charact))+
  geom_point()+
  geom_line()+
  geom_text(aes(label=percent),hjust=0, vjust=0)+
  scale_y_continuous(lim=c(0, 35))+
  coord_flip()+
  xlab("Age")+
  ylab("Percent")+
  cctheme+
  ggtitle("Income below the Federal Poverty Level Increases Likelihood of Any Mental Illness (AMI) in Adults, 2014")+
    theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.6)), legend.position='none')
  print(FPL)
ggsave("BelowFPLAMI.pdf", FPL, width =10, height=4, useDingbats=FALSE)

#NOTE - do same for SMI and below FPL line by age
FPLSMI<-ggplot(overviewSMIFPL3, aes(x=age, y=percent, color=age))+
  geom_point()+
  geom_line()+
  geom_text(aes(label=percent),hjust=0, vjust=0)+
  scale_y_continuous(lim=c(0, 10))+
  coord_flip()+
  cctheme+
  xlab("Age")+
  ylab("Percent")+
  ggtitle("Adults Below the Federal Poverty Level with SMI Compared to All Adults with SMI, 2014")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.65)), 
        legend.position='none')
print(FPLSMI)
ggsave("BelowFPLSMI.pdf", FPLSMI, width =10, height=4, useDingbats=FALSE)

#CHECK plotting same with geom_bar - another way of showing this
FPLbar<-ggplot(overviewFPL, aes(x=charact, y=percent, fill=Char, order=Char))+
  geom_bar(stat="identity", position='dodge', width = .6)+
    cctheme+
  scale_fill_brewer()+
     xlab("Population")+
      ylab("Percent")+
  ggtitle("Adults Below the Federal Poverty Level with AMI Compared to All Adults with AMI, 2014")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.6)))
print(FPLbar)
ggsave("draftBelowFPLBar.pdf", width =5, height=6)

#NOTE timeline for AMI 2008-2014 18-25 going up
years_ages<-gather(years, Year, Percent, X2008:X2014)
str(years_ages)
head (years_ages)

yearsAMI<-ggplot(years1, aes(x=Year, y=Percent, group=Age, color=Age))+
  geom_line(width=2)+
  geom_point()+
  #geom_text(aes(label=Percent))+
      scale_y_continuous(limits=c(0, 22))+
  ggtitle("AMI by Age, 18 and Older, by Years 2008-2014")+
    cctheme+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.65)))
print(yearsAMI)
ggsave("yearsAMI.pdf", yearsAMI, width =7, height=4, useDingbats=FALSE)

#NOTE SMI 18-25 going up - timeline for SMI 2008-2014
yearsSMItimeline<-gather(yearsSMI, Year, Percent, X2008:X2014)
str(yearsSMI)
head (yearsSMItimeline)

yearsSMIage<-ggplot(yearsSMItimeline, aes(x=Year, y=Percent, group=Age, color=Age))+
  geom_line(width=2)+
  geom_point()+
  geom_text(aes(label=Percent))+
      scale_y_continuous(limits=c(0, 10))+
  ggtitle("SMI by Age, 18 and Older, by Years 2008-2014")+
      cctheme+
      theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.65)))
print(yearsSMIage)
ggsave("yearsSMIage.pdf", yearsSMIage, width =7, height=4, useDingbats=FALSE)

#geom_area for all AMI (total 18 and older) for each year 
#so for all AMI the numbers are going down
years2<-filter(years_ages, Age=='Total 18 or Older')
head(years2)
yearsAMItot_area<-ggplot(years2, aes(x=Year, y=Percent, group=Age, color=Age))+
  geom_area(fill="#CD8500", color="#CD8500")+ 
  geom_point()+
  geom_text(aes(label=Percent))+
  ggtitle("AMI 18 Years and Older, Years 2008-2014")+
  cctheme+
  scale_y_continuous(limits=c(0, 30))+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.7)))
print(yearsAMItot_area)
ggsave("yearsAMItotalarea.pdf", years2, width =7, height=4, useDingbats=FALSE)

#geom_area for all SMI (total 18 and older) for each year
#for all SMI numbers going down from last year
yearsS<-filter(yearsSMI, Age=='18 or Older')
head(yearsS)

yearsSM<-gather(yearsS, Year, Percent, X2008:X2014)
head(yearsSM)

yearsSMItot_area<-ggplot(yearsSM, aes(x=Year, y=Percent, group=Age, color=Age))+
  geom_area(fill="#DA0000", color="#DA0000")+
  geom_point()+
  geom_text(aes(label=Percent))+
  ggtitle("SMI 18 Years and Older, Years 2008-2014")+
  cctheme+
  scale_y_continuous(limits=c(0, 25))+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.7)))
print(yearsSMItot_area)
ggsave("yearsSMItotalarea.pdf", yearsSMItot_area, width =8, height=5, useDingbats=FALSE)

#get the SUD with AMI and SUD with SMI and do lines for SUD/AMI and SMI
#gather SUD
SUDAMISMI1<-gather(SUDAMISMI, Year, Percent, X2008:X2014)
head(SUDAMISMI1)
str(SUDAMISMI1)

#line plot SUD overlap totals by year
yearsSUDAMISMIoverlap<-ggplot(SUDAMISMI1, aes(x=Year, y=Percent, 
                                         group=Age, color=Age))+
  geom_line()+
  geom_text(aes(label=Percent))+
  ggtitle("SUD Overlap with AMI, and with SUD Overlap with SMI, 18 Years and Older, Years 2008-2014")+
  cctheme+
  scale_y_continuous(limits=c(0, 4.2))+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.6)))
print(yearsSUDAMISMIoverlap)
ggsave("SUDAMISMIOverlap.pdf", yearsSUDAMISMIoverlap, width =7, height=4, useDingbats=FALSE)


#get the SUD and AMI added to SMI / AMI 
#join SUD and AMIarea with rbind
overlapAMISUD<-rbind(years2, SUDAMISMI1)
head(overlapAMISUD)

#take out SUD and AMI as these are in the other SUD totals
overlapAMISUD2<-subset(overlapAMISUD[c(1:7,9:10,12:13,15:16,18:19,21:22,24:25,27:28),]) 
head(overlapAMISUD2)

#geom_area with AMI, plus SUD overlaps with AMI SMI percentages stacked on top
yearsSUDtot_area<-ggplot(overlapAMISUD2, aes(x=Year, y=Percent, 
                                         group=Age, fill=Age))+
  geom_area( stat='identity')+
  geom_text(aes(label=Percent, stat='identity'))+
  ggtitle("SUD Overlap with AMI, and with SUD Overlap with SMI, 18 Years and Older, Years 2008-2014")+
  cctheme+
  scale_y_continuous(limits=c(0,25))+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.6)))
print(yearsSUDtot_area)
ggsave("overlapareaAMISUD.pdf", width=8, height =5)

#try and add SMI to the geom_area
yearsSMItimeline18<-filter(yearsSMItimeline, Age=='18 or Older')
head(yearsSMItimeline18)

overlapAMISUDSMI<-rbind(overlapAMISUD, yearsSMItimeline18)
head(overlapAMISUDSMI)

#need to check percents - some of these overlap, not stack
yearsSUDtot_area2<-ggplot(overlapAMISUDSMI, aes(x=Year, y=Percent, 
                                            group=Age, fill=Age))+
  geom_area( stat='identity')+
  #geom_text(aes(label=Percent, stat='identity'))+
  ggtitle("SUD Overlap with AMI, and with SUD Overlap with SMI, 18 Years and Older, Years 2008-2014")+
  cctheme+
  scale_y_continuous(limits=c(0,30))+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.6)))
print(yearsSUDtot_area2)
ggsave("AMI,SMI,SUDs.pdf", yearsSUDtot_area2, width =10, height=4, useDingbats=FALSE)



