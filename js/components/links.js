function Links({currentPage, setCurrentPage}){
    const pages = [
        { id: 'counter', label: 'Counter' },
        { id: 'todo', label: 'Todo' },
        { id: 'profile', label: 'Profile' },
        { id: 'products', label: 'Products' },
        { id: 'comments', label: 'Comments' },
        { id: 'weather', label: 'Weather' },
    ];
    
    return(
        <aside className="page-navigation">
            {pages.map(link => {
                return (
                    <Link
                        key={link.id}
                        id={link.id}
                        label={link.label}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                )
            })}
        </aside>
    )
}