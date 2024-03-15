import Profile from "./profile";

export function Gallery(){
    return(
        <div className="columns-3" style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <Profile/>
            <Profile/>
            <Profile/>
        </div>
    );
}