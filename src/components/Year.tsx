import Term from "./Term";
import "../styles/Year.sass";

export default (): JSX.Element => {
    return (
        <div className="year">
            <h1 className="year__name">2020</h1>
            <Term/>
            <Term/>
        </div>
    );
};