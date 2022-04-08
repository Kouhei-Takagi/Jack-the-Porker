window.onload = function(){
    var initialBoolResult = localStorage.getItem('initialBool');
    if (initialBoolResult==='true'){
        localStorage.setItem('card001', true);
        localStorage.setItem('card002', true);
        localStorage.setItem('card003', true);
        localStorage.setItem('card004', true);
        localStorage.setItem('card005', true);
        localStorage.setItem('card006', true);
        localStorage.setItem('card007', true);
        localStorage.setItem('card008', true);
        localStorage.setItem('card009', true);
        localStorage.setItem('card010', true);
        localStorage.setItem('card011', true);
        localStorage.setItem('card012', true);
        localStorage.setItem('card013', true);
        localStorage.setItem('card014', true);
        localStorage.setItem('card015', true);
        localStorage.setItem('card016', true);
        localStorage.setItem('card017', true);
        localStorage.setItem('card018', true);
        localStorage.setItem('card019', true);
        localStorage.setItem('card020', true);
        localStorage.setItem('card021', true);
        localStorage.setItem('card022', true);
        localStorage.setItem('card023', true);
        localStorage.setItem('card024', true);
        localStorage.setItem('card025', true);
        localStorage.setItem('card026', true);
        localStorage.setItem('card027', true);
        localStorage.setItem('card028', true);
        localStorage.setItem('card029', true);
        localStorage.setItem('card030', true);
        localStorage.setItem('card031', true);
        localStorage.setItem('card032', true);
        localStorage.setItem('card033', true);
        localStorage.setItem('card034', true);
        localStorage.setItem('card035', true);
        localStorage.setItem('card036', true);
        localStorage.setItem('card037', true);
        localStorage.setItem('card038', true);
        localStorage.setItem('card039', true);
        localStorage.setItem('card040', true);
        localStorage.setItem('card041', true);
        localStorage.setItem('card042', true);
        localStorage.setItem('card043', true);
        localStorage.setItem('card044', true);
        localStorage.setItem('card045', true);
        localStorage.setItem('card046', true);
        localStorage.setItem('card047', true);
        localStorage.setItem('card048', true);
        localStorage.setItem('card049', true);
        localStorage.setItem('card050', true);
        localStorage.setItem('card051', true);
        localStorage.setItem('card052', true);
        localStorage.setItem('card053', true);
        localStorage.setItem('card054', true);
        
        localStorage.setItem('initialBool', false);
    }else{
        //保存した全てのカードのバリューを取り出す。
        var loadedObj = ['card001','card002','card003','card004','card005','card006','card007','card008','card009','card010','card011','card012','card013','card014','card015','card016','card017','card018','card019','card020','card021','card022','card023','card024','card025','card026','card027','card028','card029','card030','card031','card032','card033','card034','card035','card036','card037','card038','card039','card040','card041','card042','card043','card044','card045','card046','card047','card048','card049','card050','card051','card052','card053','card054'];
        for (const elem of loadedObj){
            var loadedValue = localStorage.getItem(elem);
            //trueかfalseで条件分岐する。
        if (loadedValue==="true"){
            document.getElementById(elem).style.opacity = 1.00;
    }else{
            document.getElementById(elem).style.opacity = 0.25;
        }
    }
}
}
    
function clickHandler(e){
    var obj = e.target.id;
    if (obj==="refresh"){
        refresh();
        location.reload();
    }else{
        localStorage.setItem('initialBool', false);
        var aValue = localStorage.getItem(obj);
            if (aValue==="true"){
                document.getElementById(obj).style.opacity = 0.25;
                localStorage.setItem(obj,"false");
            }else{
                document.getElementById(obj).style.opacity = 1.00;
                localStorage.setItem(obj,"true");
            }
        
      }
    }

document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('click',clickHandler);
    localStorage.setItem('initialBool', false);
    });


function refresh(){
    localStorage.setItem('initialBool', true);
    
    localStorage.setItem('card001', true);
    localStorage.setItem('card002', true);
    localStorage.setItem('card003', true);
    localStorage.setItem('card004', true);
    localStorage.setItem('card005', true);
    localStorage.setItem('card006', true);
    localStorage.setItem('card007', true);
    localStorage.setItem('card008', true);
    localStorage.setItem('card009', true);
    localStorage.setItem('card010', true);
    localStorage.setItem('card011', true);
    localStorage.setItem('card012', true);
    localStorage.setItem('card013', true);
    localStorage.setItem('card014', true);
    localStorage.setItem('card015', true);
    localStorage.setItem('card016', true);
    localStorage.setItem('card017', true);
    localStorage.setItem('card018', true);
    localStorage.setItem('card019', true);
    localStorage.setItem('card020', true);
    localStorage.setItem('card021', true);
    localStorage.setItem('card022', true);
    localStorage.setItem('card023', true);
    localStorage.setItem('card024', true);
    localStorage.setItem('card025', true);
    localStorage.setItem('card026', true);
    localStorage.setItem('card027', true);
    localStorage.setItem('card028', true);
    localStorage.setItem('card029', true);
    localStorage.setItem('card030', true);
    localStorage.setItem('card031', true);
    localStorage.setItem('card032', true);
    localStorage.setItem('card033', true);
    localStorage.setItem('card034', true);
    localStorage.setItem('card035', true);
    localStorage.setItem('card036', true);
    localStorage.setItem('card037', true);
    localStorage.setItem('card038', true);
    localStorage.setItem('card039', true);
    localStorage.setItem('card040', true);
    localStorage.setItem('card041', true);
    localStorage.setItem('card042', true);
    localStorage.setItem('card043', true);
    localStorage.setItem('card044', true);
    localStorage.setItem('card045', true);
    localStorage.setItem('card046', true);
    localStorage.setItem('card047', true);
    localStorage.setItem('card048', true);
    localStorage.setItem('card049', true);
    localStorage.setItem('card050', true);
    localStorage.setItem('card051', true);
    localStorage.setItem('card052', true);
    localStorage.setItem('card053', true);
    localStorage.setItem('card054', true);
}
