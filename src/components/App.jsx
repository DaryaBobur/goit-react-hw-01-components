import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { FriendList } from "./FriendList";
import {TransactionHistory } from "./TransactionHistory";
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
console.log(transactions)
console.log(friends)
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 24,
        color: '#010101'
      }}
    >
    <Profile 
     username={user.username}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
    />

   <Statistics 
   title ="Upload stats" 
   stats={data} />

<FriendList 
friends={friends} />;

<TransactionHistory 
items={transactions} />;
  
</div>
  );
};
