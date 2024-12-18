1. What do props help us accomplish?

   - Make components reusable - we can provide diffrent data and generate same look up content with diffrent data inside.

2. How do you pass a prop into a component?

   - First, need to create props argument in func component, then when use compoentn we create var inside component (like attributes in html).

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

   - No, you need provide exactly component or DOM Element properties/attributes with correct names.

4. How do I receive props in a component?
   function Navbar() {
   return (
   <header>
   ...
   </header>
   )
   }

   - Need to add in Navbar argument like "props" and then use like {props.nameOfProp}

5. What data type is `props` when the component receives it?

   - props is an Object.
