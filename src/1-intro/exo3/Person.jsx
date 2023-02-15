import FullName from './FullName';
import Hobbies from './Hobbies';

function Person() {
    return (
        <div className="person">
            <FullName/>
            <Hobbies/>
        </div>
    );
}

export default Person;