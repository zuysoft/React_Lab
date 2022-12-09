import Writer from './writer';
import WriterCard from './writerCard';
import './css/writersStyles.css'
import CardGroup from 'react-bootstrap/CardGroup';

const WriterList = ({ writerList, searchTerm }) => {
    return (<div>
          <h1>Писатели</h1>
                    <div className = 'writersContainer'>
            {writerList.map((writer, index) => {
                return (
                    <Writer
                        key={index}
                        title={writer.title}
                        dob={writer.dob}
                        image={writer.image}
                    />
                )
            })}
        </div>
         <CardGroup>
             {writerList.map((writer, index) => {
                return (
                    <WriterCard
                        key={index}
                        title={writer.title}
                        dob={writer.dob}
                        image={writer.image}
                    />
                )
            })}
         </CardGroup>
        </div>
    );

}
export default WriterList;