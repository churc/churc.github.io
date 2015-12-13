require(ggplot2)
require(dplyr)
require(lubridate)
require(tidyr)
source('cctheme.R')

overlap<-read.csv("AMI_SMI_SUD_intheGeneralPopc.csv")
stringsAsFactor= FALSE
str(overlap)
head(overlap)

SUDinAMISMI<-read.csv("AMI_SMI_SUD_year_age3c.csv")
stringsAsFactor= FALSE
str(SUDinAMISMI)
head(SUDinAMISMI)

SUDinAMISMI_1<-gather(SUDinAMISMI, year, percent, X2008:X2014)
head(SUDinAMISMI_1)

overlap<-gather(overlap, year, percent, X2008:X2014)
head(overlap)

overlapAMISUD_all<-subset(overlap[c(1:4,13:16,25:28,37:40,49:52,61:64,73:76),])
head(overlapAMISUD_all)

overlapSMISUD_all<-subset(overlap[c(5:8,17:20,29:32,41:44,53:56,65:68,77:80),])
head(overlapSMISUD_all)

overlapall<-rbind(overlapAMISUD_all, overlapSMISUD_all)
head(overlapall)

overlapAMISUDtot<-filter(overlapAMISUD_all, SUD_MentalIllness_Age=="SUD AND AMI")
head(overlapAMISUDtot)

overlapSMISUDtot<-filter(overlapSMISUD_all, SUD_MentalIllness_Age=="SUD AND SMI")
head(overlapSMISUDtot)

overlapAMISMISUDtot<-rbind(overlapAMISUDtot, overlapSMISUDtot)
head(overlapAMISMISUDtot)

#4 lines, ages - AMI with SUD by age 2008-14 
#small percentage overlap
overlapAMISUDgen<-ggplot(overlapAMISUD_all, aes(x=year, y=percent, group=SUD_MentalIllness_Age, 
                                             color=SUD_MentalIllness_Age))+
  geom_line(width=2)+
    cctheme+
      ggtitle("Percent of Adults 18 and Older with Both AMI and SUDs, by Age, 
       Years 2008-2014, in the General Population")+
  xlab("")+
  ylab("Percent")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.65)))
print(overlapAMISUDgen)
ggsave("draftAMI_SUD by Age & Year.pdf")

#4 lines by age for SMI overlap - SMI with SUD by age, 2008-14
#interesting that in both 18-25 are highest and 50 and older lowest, though
#going up for 50 and older for both AMI and SMI overlaps with SUDs
overlapSMISUDgen<-ggplot(overlapSMISUD_all, aes(x=year, y=percent, group=SUD_MentalIllness_Age, 
                                                color=SUD_MentalIllness_Age))+
  geom_line(width=2)+
  cctheme+
  ggtitle("Percent of Adults 18 and Older with Both SMI and SUDs, by Age, 
  Years 2008-2014, in the General Population")+
  xlab("Year")+
  ylab("Percent")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.65)))
print(overlapSMISUDgen)
ggsave("draftSMI_SUD by Age & Year.pdf")

#2 lines - timelines for all adults for AMI plus SUD and for SMI plus SUD
overlapAMI_SMI_wSUDtot<-ggplot(overlapAMISMISUDtot,aes(x=year, 
                                                        y=percent, color=SUD_MentalIllness_Age, 
                                                        group=SUD_MentalIllness_Age))+
  geom_line(width=2)+
  cctheme+
  ggtitle("Percent of Adults 18 and Older with Both AMI and SUDs, and 
            with Both SMI and SUDs, Years 2008-2014, in the General Population")+
#  xlab("Year")+
 # ylab("Percent")+
    scale_y_continuous(limits=c(0,4))+
 theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.65)))
print(overlapAMI_SMI_wSUDtot)
ggsave("draftAMI_SMI_SUD_totals_year.pdf")

#Looking at adults WITH SUDs only, NOT the general pop, plot percent who have an AMI, SMI by age 
#Note this is SUD adults not gen pop so different percentage ranges
#NOTE high percent of SUD adults have AMI
SUDinAMISMI_plot<-ggplot(SUDinAMISMI_1,aes(x=year, 
                                                       y=percent, color=Mental.Illness.Age, 
                                                       group=Mental.Illness.Age))+
  geom_line(width=2)+
  geom_point()+
  cctheme+
  ggtitle("SUD Adults: Percent with AMI and SMIs, by Age, 2008-2014")+
  xlab("Year")+
  ylab("Percent")+
  theme(axis.text=element_text(size=rel(1.3)), title=element_text(size=rel(0.6)))
print(SUDinAMISMI_plot)
ggsave("draftAMI_SMI_with_SUDyear_age.pdf", width = 10, height =7, useDingbats=FALSE)

  