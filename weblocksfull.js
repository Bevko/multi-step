var coverageStep, coverageSelect, ageSelect, yearsOldStep, expectedSelect, phoneStep, expectedStep, genderSelect, lastNameField, firstNameField, genderStep, conditionsStep, dateSelect, birthDateStep, nameStep;

// Describe this function...
function name_field_check() {
  if (firstNameField != null && lastNameField != null) {

        nextTab = 'phoneStep';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=phoneStep]')).attr('prev-tab',we_activeTab);

        }
}


var we_tabs_next_button = '[bloc=next-btn]';
    var we_tabs_prev_button = '[bloc=back-btn]';
    var we_tabs_active_class = 'is-active';

    var we_activeTab,we_indexOfActiveTab, we_indexOfNextTab, we_indexOfPrevTab, we_prevTab, we_amountOfTabs, nextTab;

    var tabList = ['coverageStep'];

    openTab(tabList[0]);

    $(we_tabs_next_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfNextTab = indexOfActiveTab + 1;
      var nextTab = tabList[indexOfNextTab];
      var amountOfTabs = tabList.length;
      var attrNextTab = $('.w--tab-active').attr('next-tab');

      openTab(attrNextTab);

      attrNextTab = $('.w--tab-active').attr('next-tab');

      if (typeof attrNextTab !== 'undefined' && attrNextTab !== false) {
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      } else {
        $(we_tabs_next_button).removeClass(we_tabs_active_class);
      }

      if (amountOfTabs > 1) {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    $(we_tabs_prev_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfPrevTab = indexOfActiveTab - 1;
      var prevTab = tabList[indexOfPrevTab];

      var attrPrevTab = $('.w--tab-active').attr('prev-tab');

      if (indexOfActiveTab > 0) {
        openTab(attrPrevTab);
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      }

      if (indexOfActiveTab <= 1) {
        $(we_tabs_prev_button).removeClass(we_tabs_active_class);
      } else {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    function openTab(tab) {
      var tab_link = "a[data-w-tab=" + tab;
      tab = "div[data-w-tab=" + tab;

      $(tab).siblings().removeClass("w--tab-active");
      $(tab).addClass("w--tab-active");
      $(tab_link).siblings("a").removeClass("w--current");
      $(tab_link).addClass("w--current");
    }$("[name=coverageSelect]").on("input", function () {
    coverageSelect = getValueFromInput("coverageSelect");

      nextTab = 'yearsOldStep';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=yearsOldStep]')).attr('prev-tab',we_activeTab);

      });

    $("[name=coverageSelect]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      coverageSelect = getValueFromInput("coverageSelect");

      nextTab = 'yearsOldStep';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=yearsOldStep]')).attr('prev-tab',we_activeTab);

      });
    $("[name=ageSelect]").on("input", function () {
    ageSelect = getValueFromInput("ageSelect");

      nextTab = 'expectedStep';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=expectedStep]')).attr('prev-tab',we_activeTab);

      });

    $("[name=ageSelect]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      ageSelect = getValueFromInput("ageSelect");

      nextTab = 'expectedStep';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=expectedStep]')).attr('prev-tab',we_activeTab);

      });
    $("[name=expectedSelect]").on("input", function () {
    expectedSelect = getValueFromInput("expectedSelect");

      nextTab = 'genderStep';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=genderStep]')).attr('prev-tab',we_activeTab);

      });

    $("[name=expectedSelect]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      expectedSelect = getValueFromInput("expectedSelect");

      nextTab = 'genderStep';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=genderStep]')).attr('prev-tab',we_activeTab);

      });
    $("[name=genderSelect]").on("input", function () {
    genderSelect = getValueFromInput("genderSelect");

      nextTab = 'conditionsStep';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=conditionsStep]')).attr('prev-tab',we_activeTab);

      });

    $("[name=genderSelect]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      genderSelect = getValueFromInput("genderSelect");

      nextTab = 'conditionsStep';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=conditionsStep]')).attr('prev-tab',we_activeTab);

      });
    $('[bloc=next-btn]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='conditionsStep') {

        nextTab = 'birthDateStep';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=birthDateStep]')).attr('prev-tab',we_activeTab);


      }});
$("[name=dateSelect]").on("input", function () {
    dateSelect = getValueFromInput("dateSelect");

      nextTab = 'nameStep';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=nameStep]')).attr('prev-tab',we_activeTab);

      });

    $("[name=dateSelect]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      dateSelect = getValueFromInput("dateSelect");

      nextTab = 'nameStep';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=nameStep]')).attr('prev-tab',we_activeTab);

      });
    $("[name=firstNameField]").on("input", function () {
    firstNameField = getValueFromInput("firstNameField");
      name_field_check();
});

    $("[name=firstNameField]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      firstNameField = getValueFromInput("firstNameField");
        name_field_check();
});
    $("[name=lastNameField]").on("input", function () {
    lastNameField = getValueFromInput("lastNameField");
      name_field_check();
});

    $("[name=lastNameField]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      lastNameField = getValueFromInput("lastNameField");
        name_field_check();
});
