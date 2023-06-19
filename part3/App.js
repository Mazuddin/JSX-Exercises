function App() {
  return (
    <div>
      <Person
        name="Bob"
        age={56}
        hobbies={["bowling", "watching tv", "drinking beer"]}
      />
      <Person name="John" age={24} hobbies={["painting", "gambling"]} />
      <Person
        name="Jack"
        age={11}
        hobbies={["skateboarding", "making prank calls"]}
      />
      <Person
        name="Lima"
        age={9}
        hobbies={["reading", "saxophone", "eating vegetables"]}
      />
    </div>
  );
}
