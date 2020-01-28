Vue.component("navigation", {
  props: ["item"],
  data() {
    return {
      isOpen: false,
      active: false,
      mainMenu: [
        { url: "#", name: "Меню 1" },
        { url: "#", name: "Меню 2" },
        {
          url: "#",
          name: "Меню 3",
          children: [
            {
              url: "#",
              name: "Пункт меню номер 1"
            },
            {
              url: "#",
              name: "Пункт меню номер 2"
            },
            {
              url: "#",
              name: "Пункт меню номер 3"
            },
            {
              url: "#",
              name: "Пункт меню номер 4"
            },
            {
              url: "#",
              name: "Пункт меню номер 5"
            },
            {
              url: "#",
              name: "Пункт меню номер 6",
              subChildren: [
                {url: "#", name: "Подпункт меню номер 1"},
                {url: "#", name: "Подпункт меню номер 2"},
                {url: "#", name: "Подпункт меню номер 3"}
              ]
            },
            {
              url: "#",
              name: "Пункт меню номер 7"
            }
          ]
        },
        { url: "#", name: "Меню 4" },
        { url: "#", name: "Меню 5" }
      ]
    };
  },
  template: `
    <ul id="navigation">
        <li v-for="item in mainMenu">
            <template v-if="item.children || item.subChildren">
                <a 
                  :href="item.url" 
                  :title="item.name" 
                  @mouseover="isOpen = !isOpen, active = !active" 
                  :class="{ active }">{{ item.name }}</a>
                <div :class="{ isOpen }" class="sub-menu">
                    <ul>
                        <li 
                          v-for="{ url, name, index } in item.children" 
                          :key="index">
                            <a :href="url" :title="name">{{ name }}</a>
                          <div :class="{ isOpen }" class="sub-menu-2">
                            <ul>
                              <li 
                                v-for="{ url, name, index } in item.subChildren" 
                                :key="index">
                                <a :href="url" :title="name">{{ name }}</a>
                              </li>
                            </ul>
                          </div>
                        </li> 
                    </ul>
                </div>
            </template>
            <template v-else>
                <a 
                  :href="item.url" 
                  :title="item.name">{{ item.name }}</a>
            </template>
        </li>
    </ul>
    `
});

new Vue({ el: "#app" });
