import eventList from "../data/events";

export const getAllEventIds = () => {
  return Object.keys(eventList);
};

export const getEventData = evtId => {
  return eventList[evtId];
};

export const calculateResults = (event, bonus) => {
  const calculatePoints = quest => {
    return (quest.avgPoints + 3 * bonus) / quest.epCost;
  };

  const updateEfficiency = results => {
    const maxPoints = Math.max(...results.map(qst => qst.calcPoints));
    results.forEach(qst => {
      qst.efficiency = (qst.calcPoints * 100) / maxPoints;
    });
  };

  const results = event.quests.map(qst => ({
    name: qst.name,
    epCost: qst.epCost,
    avgPoints: qst.avgPoints,
    calcPoints: calculatePoints(qst),
    efficiency: 0
  }));

  updateEfficiency(results);

  // TODO sort it in the table itself
  const sortedResults = results.sort((a, b) => b.efficiency - a.efficiency)

  return sortedResults
};
