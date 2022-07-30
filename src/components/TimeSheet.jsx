import { useEffect, useState } from "react";
import { getTimeSheetData } from "../services/api";

const TimeSheet = () => {
    const [activities, setActivities ] = useState([])
    const weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    useEffect(()=>{
        const callApi = async() => {
            setActivities(await getTimeSheetData())
        }
        callApi();
    },[])
    if (!activities.length) {
        return <p>loading...</p>
        
    }
    return (
    <div class="lg:flex w-full justify-center items-center h-screen px-4">
        <table className="border-spacing-y-3 border-separate w-full overflow-x-auto md:w-5/6 ">
            {/* table header */}
        <thead>
            <tr>
                <th className="p-3 font-medium rounded-full"></th>
                {
                    weekDays.map((day, index) =><th className=" bg-gray-100 shadow-sm rounded-full p-3" key={index}>{day}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {
                activities.map((activity,index) => <tr className="odd:bg-gray-50 rounded-full" key={index}><td className=" shadow-md text-center rounded-full p-3">{activity.start.slice(0,5)} - {activity.end.slice(0,5)}</td>{weekDays.map((day,i)=><td className={activity.daysSelected[2] === `${i+1}`|| activity.daysSelected[1] === `${i+1}`|| activity.daysSelected[0] === `${i+1}` ? "font-medium text-center" : ""} key={i}><span className={activity.daysSelected[2] === `${i+1}`|| activity.daysSelected[1] === `${i+1}`|| activity.daysSelected[0] === `${i+1}` ? "bg-red-200 shadow-sm px-10 py-3 rounded-full":""}>{ activity.daysSelected[2] === `${i+1}`|| activity.daysSelected[1] === `${i+1}`|| activity.daysSelected[0] === `${i+1}` ? activity.title : ""}</span></td>)}</tr>)
            }
        </tbody>
    </table>
    </div>
    )
}
 
export default TimeSheet;