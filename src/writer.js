import './css/writersStyles.css'
const Writer = ({ title,image,dob}) => {
var blockWidth;
    window.innerWidth >= 1000 ? blockWidth = 27 : blockWidth = 75; 
    var imgHeight = window.innerWidth * blockWidth / 100 * 350 / 412;
    return (<div>
    <div className = 'mainImage'
                style={{backgroundImage: 'url(/media/' + image + '.jpg)',
                    height: imgHeight + 'px' 
                }}>
            </div>
            <h2>{title}</h2>
            <p>{dob}</p>
            <a href = {title}>Узнать больше</a>
        </div>);
}

export default Writer;