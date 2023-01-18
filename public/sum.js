const numSubmit = document.querySelector('.numSubmit');
const numInput = document.querySelector('.numInput');

/*Ajax + Promise*/
numSubmit.addEventListener('click', e => {
    e.preventDefault();
    getData(numInput.value)
    .then((res) => {
        document.querySelector('.sumNum').textContent = res;
    })
    .catch((err) => {
        console.log(err)
    })
    document.querySelector('.numForm').reset();
})

function getData(num) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        //定義方法
        req.open("GET", `http://localhost:3000/getData?number=${num}`);
        //當請求完成進行函式的結果
        req.onload = () => {
            if (req.status == 200) {
                //資料成功取得
                resolve(req.response)
            } else {
                //資料取得失敗
                reject(req)
            }
        }
        //送出請求
        req.send();
    })
}

/*axios*/
/*
numSubmit.addEventListener('click', e => {
    e.preventDefault();
    getData(numInput.value);
    document.querySelector('.numForm').reset();
})

function getData(num) {
    axios.get(`http://localhost:3000/getData?number=${num}`)
        .then(response => {
            document.querySelector('.sumNum').textContent = response.data;
        }).catch(error => {
            console.log(`Error: ${error}`);
        })
}
*/




