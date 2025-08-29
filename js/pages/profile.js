function Profile(){
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                
                const response = await res.json();
                setUser(response);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);
    return(
        <div className="profile-container">
            <h2>Profile!</h2>
            <ProfileCard loading={loading} error={error} user={user}/>
        </div>
    )
}