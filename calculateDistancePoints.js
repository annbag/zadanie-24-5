const calculateDistancePoints = (distance, hillSize, kPoint) => {
 
  let points = 0;

  switch (hillSize) {
  	case 'normal':
  		points = 60;
  		points = points + (distance - kPoint) * 2;
  		break;
  	case 'large':
  		points = 60;
  		points = points + (distance - kPoint) * 1.8;
  		break;
  	case 'mammoth':
  		points = 120;
  		points = points + (distance - kPoint) * 1.2;
  		break;
  }
  return points;
};

module.exports = calculateDistancePoints;

/*const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (hillSize === 'normal') {
		return (distance - kPoint)*2 + 60;
  }
  else if (hillSize === 'large') {
    return (distance - kPoint)*1.8 + 60;
  }
  else if (hillSize === 'mammoth') {
    return (distance - kPoint)*1.2 + 120;
  }
  else {
    return 'please choose correct hill size';
  }
};
module.exports = calculateDistancePoints; */