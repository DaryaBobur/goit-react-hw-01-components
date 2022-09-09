import PropTypes from 'prop-types';
import {SectionStatistics, StatList, StatItem} from './Statistics.styled';


export function Statistics({title="", stats}) {
return (    
<SectionStatistics className="statistics">
  {title && <h2 className="title">{title}</h2>}

  <StatList className="stat-list">
    {stats.map(item => (
       <StatItem className="item" key={item.id}>
       <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}%</span>
     </StatItem>
))} 
   </StatList> 
  </SectionStatistics>
)
}

Statistics.propTypes = {
title: PropTypes.string,
stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}))
}