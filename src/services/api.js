export const getTimeSheetData = async() =>{
    const response = await fetch("http://localhost:8000/time_plane")
    const data = await response.json()
    return data

}