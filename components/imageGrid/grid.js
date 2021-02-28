import style from "./grid.module.css";

export default function ImageGrid(props){
    function renderImages(imgs){
        return imgs.map((item)=>{
            return (<div><img src={item.url} alt={item.alt} /></div>)
        })
    }
    return (
        <div className={style.imageGrid}>
            {renderImages(props.images)}
        </div>
    )
}