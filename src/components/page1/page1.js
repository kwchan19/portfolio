import './page1.css';

export default function Page1() {



    return (
        <div className='page1div'>
            <div className="page1 container">
                <div className='who-am-i-div'>
                    <div className='who-am-i'>
                        <div className="hello">
                            Hello, I'm <div className='rainbow rainbow_text_animated'>Kevin</div>
                        </div>
                        <div className="name">
                            Take a look into my journey as a Full Stack Developer.
                        </div>
                    </div>
                    <div className='companies'>
                        <a className='github' href="https://github.com/kwchan19"><img src="/github.png"></img></a>
                        <a className='linkedin' href="https://linkedin.com/in/kwchan19"><img src="/linkedIn.png"></img></a>
                    </div>
                </div>
              
            </div>
        </div>
    );
}