import propTypes from 'prop-types';


export const Section = ({ title }) => {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}


Section.propTypes = {
    title: propTypes.string.isRequired,
}