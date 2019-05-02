const fetchProfile = ()=>{
    return fetch('http://localhost:5000/fetchUserProfile', {
        method: 'GET',
        json: true
    })
    .then((response) => response.json())
    .catch(console.error())
}
export default fetchProfile;