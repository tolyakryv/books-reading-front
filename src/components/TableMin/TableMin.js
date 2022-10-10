
import IconDelete from "../../img/delete.svg";
import { HandySvg } from "handy-svg";
import s from "../TableMin/TableMin.module.css"

const TableMin = ({data, handleDelete, cellItem}) =>{


 if (data.length === 0) { return (
    <div>
    <div className={s.wrapper}>
        <div>{cellItem}</div>
                <div className={s.bigColumn}>
                <div className={s.title}>...</div>
                <div className={s.row}>
                <div className={s.column}>
                    <div className={s.cell}><span className={s.grey}>Автор:</span></div>
                    <div className={s.cell}><span className={s.grey}>Рік:</span></div>
                    <div className={s.cell}><span className={s.grey}>Стор.:</span></div>
                </div>
                <div className={s.column}>
                    <div className={s.cell}>...</div>
                    <div className={s.cell}>...</div>
                    <div className={s.cell}>...</div>
                </div>
                </div>
                </div>
        <div> <button className={s.button} type="button" > <HandySvg src={IconDelete} className = {s.svg}/></button></div>
        </div>
        
</div>
 )} else
 
 {return (
    <div>
        {data.map(e => 
        <div className={s.wrapper}>
            <div>{cellItem}</div>
                    <div className={s.bigColumn}>
                    <div className={s.title}><span className={s.width}>{e.title}</span></div>
                    <div className={s.row}>
                    <div className={s.column}>
                        <div className={s.cell}><span className={s.grey}>Автор:</span></div>
                        <div className={s.cell}><span className={s.grey}>Рік:</span></div>
                        <div className={s.cell}><span className={s.grey}>Стор.:</span></div>
                    </div>
                    <div className={s.column}>
                        <div className={s.cell}>{e.author}</div>
                        <div className={s.cell}>{e.publicDate}</div>
                        <div className={s.cell}>{e.amountPages}</div>
                    </div>
                    </div>
                    </div>
            <div> <button className={s.button} type="button" onClick={() => handleDelete(e._id)}> <HandySvg src={IconDelete} className = {s.svg}/></button></div>
            </div>
            )}
    </div>
        );
        }
    }
    
 
 export default TableMin