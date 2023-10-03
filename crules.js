  const getCrulesProperty = (filter, property) => {
    if (filter.crules?.length && filter.crules[0]?.[property] !== undefined) {
      return filter.crules[0][property];
    }
    return undefined;
  };

  const buildCrules = (filter) => {
    const crulesObj = {};
    crulesObj.condition = getCrulesProperty(filter, 'condition') || filter.condition;

    if ('value' in filter) {
      crulesObj.value = filter.value || '';
    } else {
      crulesObj.value = getCrulesProperty(filter, 'value');
    }

    if ('value2' in filter) {
      crulesObj.value2 = filter.value2 || '';
    } else {
      crulesObj.value2 = getCrulesProperty(filter, 'value2');
    }

    const crulesArray = [crulesObj];
    return crulesArray;
  };
