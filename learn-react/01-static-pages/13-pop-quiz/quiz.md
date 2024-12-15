1. Where does React put all of the elements I create in JSX when I
   call `root.render()`?

   Create new elements inside DOM element with id="root".

2. What would show up in my console if I were to run this line of code:

   ```
   console.log(<h1>Hello world!</h1>)
   ```

   JavaScript object.

3. What's wrong with this code:

   ```
   root.render(
       <h1>Hi there</h1>
       <p>This is my website!</p>
   )
   ```

   We cannot render 2 element at time. Need to wrap it with example: div, main or better option: React Fragment <Fragment> or <>

4. What does it mean for something to be "declarative" instead of "imperative"?

   - Declarative programming focuses on what you want to achieve
   - Imperative programming focuses on how to achieve it

5. What does it mean for something to be "composable"?
   - Small piece of something thath can be used multiple times in various place.
