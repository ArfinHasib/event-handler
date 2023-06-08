import EvetnList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

const HomePage = () => {
   const featuredEvents = getFeaturedEvents();

   return (
      <div>
         <ul>
            <EvetnList items={featuredEvents} />
         </ul>
      </div>
   );
};

export default HomePage;
