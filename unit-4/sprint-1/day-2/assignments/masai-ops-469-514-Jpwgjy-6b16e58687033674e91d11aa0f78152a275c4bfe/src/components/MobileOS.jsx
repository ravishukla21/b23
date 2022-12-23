function Ullist1() {
    return (
        <>

            <h1>Mobile Operating System</h1>
            <ul data-testid="os-list" >
                <li>Android</li>
                <li>Blackberry</li>
                <li>iPhone</li>
                <li>Windows Phone</li>
            </ul>
        </>
    );


}

function Ullist2() {
    return (
        <>

            <h1>Mobile Manufacturers</h1>
            <ul data-testid="manufacturers-list" >
                <li>Samsung</li>
                <li>HTC</li>
                <li>Micromax</li>
                <li>Apple</li>
            </ul>
        </>
    );


}
function Myfun(){
    return(
        <>
        <Ullist1/>
        <Ullist2/>
        
        </>



    );
}
export default Myfun;
