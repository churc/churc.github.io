require('ggplot2')
require('grid')
#cctheme
cctheme<-theme(

#grey major grid lines, light gray blue minor grid lines with offwhite background
  panel.grid.major = element_line(colour = '#A2B5CD'),
  panel.grid.minor = element_line(colour = '#CAE1FF'),
  panel.background = element_rect(fill = '#FFFAFA'),
  
#remove tickmarks 
  axis.ticks = element_blank(),

#tuck labels close to grid
  axis.ticks.margin = unit(0, 'points'),

#add padding to chart and make background light blue
  plot.margin = unit(c(40, 30, 40, 30), 'point'),
  plot.background = element_rect(fill = '#FFFAFA'),
  
#set default text settings
  text = element_text(family='Helvetica', color = '#545454', size = 11),
  title = element_text(family='Helvetica'),
  
#set axis text
  axis.text = element_text(family = 'Helvetica', color = '#ABABAB', size = rel(1.6)),
  axis.title = element_text(size = rel(1.6)),
  
#position titles and labels
  plot.title = element_text(hjust = 0,vjust = 3.5, size = rel(2.3)),
  axis.title.x = element_text(vjust = -1.5),
  axis.title.y = element_text(vjust = 2.5),
  
#style facet charts
  strip.text = element_text(size = rel(1.6), vjust = 0.5),
  strip.background = element_blank(),
  panel.margin = unit(0.03 , 'npc')
  
)
