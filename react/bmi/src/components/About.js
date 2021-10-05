import React from 'react';

function About() {
    return (
        <div>
            <h1 className="display-6 ms-2 text-center text-secondary">Vücut Kitle Endeksi Hesaplama / BMI Hesaplama</h1>

            <div className="card border-bottom-0">
                <div className="card-body">
                    <h5 className="card-title display-6">BMI Nedir?</h5>
                    <p className="card-text">Vücut kitle indeksi hesaplama veya BMI hesaplama kilonuzun boyunuzun karesine bölünmesiyle elde edilen değerdir. Bu değer obezite durumu hakkında bilgi verir. BMI değerlerinde Dünya Sağlık Örgütü’nün belirlediği aralıklar referans olarak alınır. Çıkan sonuca göre kilonuzun boyunuza göre ideal olup olmadığını anlayabilirsiniz.</p>
                </div>
            </div>

            <div className="card border-bottom-0">
                <div className="card-body">
                    <h5 className="card-title text-danger">BMI değeriniz  18,5 kg/m2  ‘ten küçükse zayıfsınız.</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, accusamus!</p>
                </div>
            </div>

            <div className="card border-bottom-0">
                <div className="card-body">
                    <h5 className="card-title text-success" >BMI değeriniz 18,5 – 24,9 kg/m2 arasındaysa kilonuz normaldir.</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, at.</p>
                </div>
            </div>

            <div className="card border-bottom-0">
                <div className="card-body">
                    <h5 className="card-title text-danger">BMI değeriniz 25 – 29,9 kg/m2 arasındaysa kilolu sınıfındasınız.</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, doloremque.</p>
                </div>
            </div>

            <div className="card border-bottom-0">
                <div className="card-body">
                    <h5 className="card-title text-danger">BMI değeriniz 30 – 39,9 kg/m2 arasındaysa şişman sınıfındasınız.</h5>
                    <p className="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sapiente.</p>
                </div>
            </div>

            <div className="card">  
                <div className="card-body">
                    <h5 className="card-title text-danger">BMI değeriniz 40 kg/m2 ve üzerindeyse aşırı şişman sınıfındasınız. </h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias.</p>
                </div>
            </div>

        </div>
    )
}

export default About;
