const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setErrorAlert("")
        if (isNaN(value) || value <=0) {
            setErrorAlert("Number of events must be either a positive number and not empty")
        } else {
            setCurrentNOE(value);
        }
      };

    return (
        <div id="number-of-events">
            <input 
                type="text"
                defaultValue={32}
                onChange={handleInputChanged}
            />
        </div>
    )
}

export default NumberOfEvents;