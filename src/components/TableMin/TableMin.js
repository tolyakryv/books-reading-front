
import IconDelete from "../../img/delete.svg";
import { HandySvg } from "handy-svg";
import s from "../TableMin/TableMin.module.css"

const TableMin = ({data, handleDelete, cellItem}) =>{
 console.log(data)
    return (
<div>
    {data.map(e => 
    <div className={s.wrapper}>
        <div>{cellItem}</div>
                <div className={s.bigColumn}>
                <div className={s.title}>{e.Title}</div>
                <div className={s.row}>
                <div className={s.column}>
                    <div className={s.cell}><span className={s.grey}>Автор:</span></div>
                    <div className={s.cell}><span className={s.grey}>Рік:</span></div>
                    <div className={s.cell}><span className={s.grey}>Стор.:</span></div>
                </div>
                <div className={s.column}>
                    <div className={s.cell}>{e.Author}</div>
                    <div className={s.cell}>{e.Year}</div>
                    <div className={s.cell}>{e.pages}</div>
                </div>
                </div>
                </div>
        <div> <button className={s.button} type="button" onClick={() => handleDelete(e.id)}> <HandySvg src={IconDelete} className = {s.svg}/></button></div>
        </div>
        )}
</div>
    );
 };
 
 export default TableMin