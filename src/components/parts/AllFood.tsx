// カードを選んで登録したら食材が追加される

// import Button from '@material-ui/core/Button';

// export function AllFood() {
//     return(
//     <>
//     <Button variant="contained" color="primary" disableElevation>
//     Disable elevation
//     </Button>
//     </>
//     )
// }

interface AllFoodProps {
    count: number
    size: number
}

export function AllFood({count, size}: AllFoodProps) {
    return (
    <>
        <h2 style={{fontSize: size}}>{ count }</h2>
    </>
    );
}
