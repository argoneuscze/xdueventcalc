import React, { useState } from "react";
import {
  getAllEventIds,
  getEventData,
  calculateResults
} from "../util/eventUtils";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem, Select } from "@material-ui/core";
import ResultsTable from "./ResultsTable";

const EventCalculator = () => {
  const [event, setEvent] = useState(getAllEventIds()[0]);
  const [bonus, setBonus] = useState("");
  const [results, setResults] = useState([]);

  const handleBonusChange = e => {
    const value = e.target.value;
    if (!(value < 0)) setBonus(value);
  };

  const handleEventChange = e => {
    setEvent(e.target.value);
  };

  const handleCalculate = () => {
    const data = getEventData(event);
    setResults(calculateResults(data, bonus));
  };

  const eventSelectItems = getAllEventIds().map(id => {
    const event = getEventData(id);
    return (
      <MenuItem value={id} key={id}>
        {event.name}
      </MenuItem>
    );
  });

  return (
    <>
      <form>
        <Select id="event-select" value={event} onChange={handleEventChange}>
          {eventSelectItems}
        </Select>
        <br />
        <TextField
          id="bonus"
          type="number"
          label="Your Bonus"
          value={bonus}
          onChange={handleBonusChange}
        />
        <Button variant="outlined" onClick={handleCalculate}>
          Calculate
        </Button>
      </form>
      {results.length > 0 && <ResultsTable data={results} />}
    </>
  );
};

export default EventCalculator;
