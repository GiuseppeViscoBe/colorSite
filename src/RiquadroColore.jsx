import classes from './RiquadroColore.module.css'

function RiquadroColore({backgroundColor}){
    return (
        <div className={classes.colore} style={backgroundColor}>

        </div>
    )
}


export default RiquadroColore;