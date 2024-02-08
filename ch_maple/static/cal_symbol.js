const main=document.querySelector(".main");
export function make_card(response){
    $(".row-cols-3-container").empty();
    let symbol=response["symbol"];
    for(let i=0;i<symbol.length;i++){
        let img=symbol[i]["symbol_icon"];
        let title=symbol[i]["symbol_name"];
        let lev=symbol[i]["symbol_level"];
        let my_symbol=symbol[i]["symbol_growth_count"];
        let arc=symbol[i]["symbol_force"];
        let require=symbol[i]["symbol_require_growth_count"];
        if(lev==20){
        let temp_html = `
        <div class="card">
            <img class="card-img-top" src="${img}" alt="Card image cap">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">증가 포스+${arc}</p>
        <p class="card-text">현재 레벨${lev}LV</p>
        <p class="card-text">이 포스는 만렙입니다.</p>
        </div>
        `;
        main.style.overflow='auto'
        $(".row-cols-3-container").append(temp_html);
        }
        else{
            let temp_html = `
            <div class="card">
                <img class="card-img-top" src="${img}" alt="Card image cap">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">증가포스+${arc}</p>
            <p class="card-text">현재 레벨${lev}LV</p>
            <p class="card-text">모은 심볼${my_symbol}개</p>
            <p class="card-text">다음 레벨까지 필요한 심볼${require}개</p>
            </div>
            `;
            main.style.overflow='auto'
        $(".row-cols-3-container").append(temp_html);
        }
    }
};
export function make_arc_card(response) {
    $(".row-cols-3-container").empty();
    let symbol = response["symbol"];
    for (let i = 0; i < symbol.length; i++) {
        let title = symbol[i]["symbol_name"];
        if (title.indexOf("아케인심볼") !== -1) {
            let lev = symbol[i]["symbol_level"];
            let my_symbol = symbol[i]["symbol_growth_count"];
            let arc = symbol[i]["symbol_force"];
            let require = symbol[i]["symbol_require_growth_count"];
            let img = symbol[i]["symbol_icon"];
            if (lev == 20) {
                let temp_html = `
                <div class="card">
                    <img class="card-img-top" src="${img}" alt="Card image cap">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">증가포스+${arc}</p>
                    <p class="card-text">현재 레벨${lev}LV</p>
                    <p class="card-text">만렙 메짱이시군요.</p>
                </div>
                `;
                main.style.overflow = 'auto'
                $(".row-cols-3-container").append(temp_html);
            } else {
                let temp_html = `
                <div class="card">
                    <img class="card-img-top" src="${img}" alt="Card image cap">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">증가포스+${arc}</p>
                    <p class="card-text">현재 레벨${lev}LV</p>
                    <p class="card-text">모은 심볼${my_symbol}개</p>
                    <p class="card-text">다음 레벨까지 필요한 심볼${require}개</p>
                </div>
                `;
                main.style.overflow = 'auto'
                $(".row-cols-3-container").append(temp_html);
            }
        }
    }
};
export function make_atc_ard(response){
    $(".row-cols-3-container").empty();
    let symbol = response["symbol"];
    for (let i = 0; i < symbol.length; i++) {
        let title = symbol[i]["symbol_name"];
        if (title.indexOf("어센틱심볼") !== -1) {
            let lev = symbol[i]["symbol_level"];
            let my_symbol = symbol[i]["symbol_growth_count"];
            let arc = symbol[i]["symbol_force"];
            let require = symbol[i]["symbol_require_growth_count"];
            let img = symbol[i]["symbol_icon"];
            if (lev == 20) {
                let temp_html = `
                <div class="card">
                    <img class="card-img-top" src="${img}" alt="Card image cap">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">증가포스+${arc}</p>
                    <p class="card-text">현재 레벨${lev}LV</p>
                    <p class="card-text">만렙 메짱이시군요.</p>
                </div>
                `;
                main.style.overflow = 'auto'
                $(".row-cols-3-container").append(temp_html);
            } else {
                let temp_html = `
                <div class="card">
                    <img class="card-img-top" src="${img}" alt="Card image cap">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">증가포스+${arc}</p>
                    <p class="card-text">현재 레벨${lev}LV</p>
                    <p class="card-text">모은 심볼${my_symbol}개</p>
                    <p class="card-text">다음 레벨까지 필요한 심볼${require}개</p>
                </div>
                `;
                main.style.overflow = 'auto'
                $(".row-cols-3-container").append(temp_html);
            }
        }
    }
}
