function useVariableWatcher(initialValue, onChange) {
  let variable = [initialValue];
  function handleVariableChange() {
    onChange(variable);
  }
  function updateVariable(newValue) {
    variable[0] = newValue;
    handleVariableChange();
  }
  return [variable, updateVariable];

}