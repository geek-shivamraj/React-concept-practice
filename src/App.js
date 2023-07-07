import React from "react";
import ExerciseComponent from "./assignments/build-first-component/ExerciseComponent";
import Gallery from "./assignments/build-first-component/Profile";
import Product from "./assignments/props-practice/Product";
import Avatar from "./assignments/props-practice/Avatar";
import PackingList from "./assignments/conditional-rendering/PackingList";
import PeopleList from "./assignments/rendering-lists/PeopleList";
import StructuredPeopleList from "./assignments/rendering-lists/StructuredPeopleList";
import ClickButton from "./assignments/event-handling/ClickButton";
import DemoToolbar from "./assignments/event-handling/DemoToolbar";
import Toolbar from "./assignments/event-handling/PropsEventHandling";
import EventPropagation from "./assignments/event-handling/EventPropagation";
import StopEventPropagation from "./assignments/event-handling/StopEventPropagation";
import Signup from "./assignments/event-handling/SignUp";
import StateDemo from "./assignments/event-handling/StateDemo";
import PreventDefault from "./assignments/event-handling/PreventDefault";
import MultipleStateVariable from "./assignments/event-handling/MultipleStateVariable";
import UpdateObjectState from "./assignments/event-handling/UpdateObjectState";
import SpreadOperator from "./assignments/event-handling/SpreadOperator";
import SpreadOperatorContd from "./assignments/event-handling/SpreadOperatorContd";
import SpreadOperatorNestedUpdate from "./assignments/event-handling/SpreadOperatorNestedUpdate";
import UpdateArrayMap from "./assignments/event-handling/UpdateArrayMap";
import UpdateArrayFilter from "./assignments/event-handling/UpdateArrayFilter";
import PrinipleGroupRelated from "./assignments/event-handling/PrincipleGroupRelated";
import PrincipleAvoidContradiction from "./assignments/event-handling/PrincipleAvoidContradiction";
import PrincipleAvoidContra2 from "./assignments/event-handling/PrincipleAvoidContra2";
import PrincipleAvoidDuplicate from "./assignments/event-handling/PrincipleAvoidDuplicate";
import PrincipleAvoidRedundant from "./assignments/event-handling/PrincipleAvoidRedundant";
import PrincipleAvoidDuplicate1 from "./assignments/event-handling/PrincipleAvoidDuplicate1";

function App() {
  return (
    <div>
      <ExerciseComponent />
      <PrincipleAvoidDuplicate1 />
      <PrincipleAvoidDuplicate />
      <PrincipleAvoidRedundant />
      <PrincipleAvoidContra2 />
      <PrincipleAvoidContradiction />
      <PrinipleGroupRelated />
      <UpdateArrayFilter />
      <br />
      <br />
      <UpdateArrayMap />
      <SpreadOperatorNestedUpdate />
      <br />
      <br />
      <SpreadOperatorContd />
      <SpreadOperator />
      <UpdateObjectState />
      <MultipleStateVariable />
      <StateDemo />
      <PreventDefault />
      <Signup />
      <StopEventPropagation />
      <EventPropagation />
      <Toolbar />
      <DemoToolbar />
      <ClickButton />
      <StructuredPeopleList />
      <PeopleList />
      <PackingList />
      <Gallery />
      <Product title="Product 1" price="10" description="First product" />
      <Product title="Product 2" price="20" description="Second product" />
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
}

export default App;
