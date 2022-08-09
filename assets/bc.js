var $$ = document.querySelectorAll.bind(document);
var $ = document.querySelector.bind(document);

const app = {
    tabElement: $$('.tab'),
    resumeElement: $('#resume'),

    // Open/Close book
    openBtn: $('#open'),
    closeBtn: $('#close'),


    // Tabbar
    tabItem: $$('.product__tabbar .tab-item'),
    tabLine: $('.product__tabbar .tab-line'),

    start: function(){
        this.handleActBook();

        this.handleTabbar();
    },

    handleActBook: function(){
        this.openBtn.onclick = this.openBook.bind(this);
        this.closeBtn.onclick = this.closeBook.bind(this);
    },
    openBook: function(){
        this.tabElement[0].style = `transform: rotateY(0deg);`;
        setTimeout(()=>{
            this.tabElement[2].style = `transform: rotateY(0deg);`;
        },250);
    },
    closeBook: function(){
        this.tabElement[2].style = `transform: rotateY(-180deg);`;
        setTimeout(()=>{
            this.tabElement[0].style = `transform: rotateY(180deg);`;
        },250);
    },
    handleTabbar: function(){
        let elementTab = ['','.tab1','.tab2','.tab3'];
        // STT
        let tabActive = 0;
        let tabActiveRunning = false;

        // Active first tab
        activeTabline.call(this, 0);

        // Set event when click tabItem
        this.tabItem.forEach((value,index)=>{
            value.onclick = activeTab.bind(this,index);
        });

        function activeTab(index){
            if(index == tabActive || tabActiveRunning)
                return false;
            tabActiveRunning = true;
            // cancel active current tab
            $('.product__tabbar .tab-item.active').classList.remove('active');

            // active new tab
            this.tabItem[index].classList.add('active');

            // active tab-line
            activeTabline.call(this, index);

            // update tabActive
            tabActive = index;


            // ACTIVE ELEMENT
            // remove active current
            $$('.product__element .element.active').forEach(value=>{
                value.classList.remove('active');
                setTimeout(()=>{value.style.display = 'none';},200);
                
            })
            // add active
            setTimeout(()=>{
                $$(`.product__element .element${elementTab[index]}`).forEach(value=>{
                    value.classList.add('active');
                    value.style.display = 'block';
                });
                tabActiveRunning = false;
            },200);
        }

        function activeTabline(index){
            let left = this.tabItem[index].offsetLeft;
            let width = this.tabItem[index].offsetWidth;
            this.tabLine.style = `left: ${left}px; width: ${width}px`;
        }
    }

}

app.start();