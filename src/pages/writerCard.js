import './css/writersStyles.css'
import Card from 'react-bootstrap/Card';
const Writer = ({ title,image,dob}) => {
    return (<div>
          <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           Некоторый текст об авторе
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Годы жизни {dob}</small>
           <a href = {title}>Узнать больше</a>
        </Card.Footer>
      </Card>
      </div>
  );
}

export default Writer;