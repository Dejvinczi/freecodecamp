1. In what way are React components meant to be "pure functions"

   - Giving same props, component should render same UI.

2. What is a "side effect" in React? What are some examples?

   - Side effect implements escape hatch - it's mean help us with side effects like fetching data, subscriptions to websockets etc. React does not do it for self.

3. What is NOT a "side effect" in React? Examples?

   - States

4. When does React run your useEffect function? When does it NOT run
   the effect function?

   - useEffect run callback function after mount and after, when dependecies array changes.

5. How would you explain what the "dependecies array" is?

   - Dependecies array is a array of values thath represents current "state" of component side effects trigger. If this state change, useEffect rerun callback function for new side effects.
