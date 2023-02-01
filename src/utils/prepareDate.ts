const prepareDate = (value: string) => {
    const newDate = new Date(value);
    return {
        year : newDate.getFullYear(),
        }
}

export default prepareDate;