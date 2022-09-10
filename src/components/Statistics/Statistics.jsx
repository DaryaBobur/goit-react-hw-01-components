import PropTypes from 'prop-types';
import {SectionStatistics, StatList, StatItem} from './StatisticsStyled';


const Statistics = ({title, stats}) => {
return (    
<SectionStatistics>
  {title && <h2 className="title">{title}</h2>}

  <StatList>
    {stats.map(item => (
       <StatItem key={item.id}>
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

export default Statistics;