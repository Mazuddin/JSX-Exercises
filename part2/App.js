const App = ()=> {
  return (
    <div>
      <Tweet
        name="J John"
        username="Omid"
        date={new Date().toDateString()}
        message="Hello everyone!"
      />
      <Tweet
        name="Ahmad. john"
        username="Deer"
        date={new Date().toDateString()}
        message="#I love to learn react"
      />
      <Tweet
        name="Tim Garcia"
        username="TimGarcia0"
        date={new Date().toDateString()}
        message="I need more time!"
      />
    </div>
  );
}
