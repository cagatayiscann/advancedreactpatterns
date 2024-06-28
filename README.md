# advancedreactpatterns
 
The idea of component component is that we can create a set of related components that together achieve common and useful task.
for example modal windows, pagination, tables and so on.

Basically, the way to implement is create a parent component, then a few different child components that really belong to the parent that only make sense when used together.

advantage: remove prop drilling.
using contextApi is the greatest use case for contextApi.

Recipe:

1) Create a context.
2) Create parent component.
3) Create child components.
4) Add child components as properties to parent compoent (optional)

See in code: https://github.com/cagatayiscann/advancedreactpatterns/blob/main/src/CompoundComponent/Counter.js
