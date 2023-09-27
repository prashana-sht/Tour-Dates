export default function Card({img, name, date, para, buy}){
    return(
        <div className="row">
            <div className="column">
                <div className="card">
                <img src ={img} height="400" width ="400"/> <br/>
                <div className="year">
                <h3>{name}</h3> 
                {date}<br/>
                {para} <br/> <br/>
                <button>{buy}</button>
                </div>
                </div>
            </div>
        </div>
    );
}