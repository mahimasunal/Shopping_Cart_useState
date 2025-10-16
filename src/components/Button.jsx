
export default function Button({className, children}){
    return(
        <div>
            <button className={className}>{children}</button>
        </div>
    )
}