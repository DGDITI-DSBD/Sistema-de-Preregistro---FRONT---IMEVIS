import Ondas from '../../images/ondas3.svg';
import LogoIsem from '../../images/logo-bienestar_blank.png';
import Loading from '../../images/loading.gif';
import useWindowSize from '../../hooks/useWindowSize';


export const LoadingPage = () => {

    const backgroundLogin = {
        backgroundImage: 'url(' + Ondas + ')',
        backgroundRepeat: 'no-repeat', 
        backgroundSize: '100% 100%'
    }

    const size = useWindowSize(); 

    return (
        <main className="bg-gradient-to-r from-red-900 from-1% via-colorPrimario via-95% to-colorPrimario to-90%" >
            <div style={backgroundLogin}>    
                <div className="relative md:flex h-screen w-screen">
                    <div className="flex-1 pt-40">
                        <div className='flex items-center justify-center pb-14'>
                            <img className="w-48 h-48" src={LogoIsem} style={{height: `${size.width < 800 ? "50px" : "100px"}`, width: `${size.width < 800 ? "200px" : "450px"}`}} alt="ave"/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className="w-24 h-24 sm:w-auto sm:h-full"
                            style={{width: `${size.width < 500 ? "100px" : "100px"}`, height: `${size.width < 500 ? "100px" : "100px"}`}}
                            src={Loading} alt="Loading"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      );
}
