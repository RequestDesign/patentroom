//team
$(document).ready(function () {
  // Обработчик наведения на карточку
  $(".team__slide").on("mouseenter", function () {
    // Скрыть информацию в других слайдах
    $(".team__slide-info").removeClass("active").fadeOut();

    // Показать информацию текущего слайда
    $(this).find(".team__slide-info").addClass("active").fadeIn();
  });

  // Обработчик выхода мыши из карточки
  $(".team__slide").on("mouseleave", function () {
    // Скрыть информацию текущего слайда при выходе курсора
    $(this).find(".team__slide-info").removeClass("active").fadeOut();
  });
});

// $('[data-modal="menu-modal"]').on("click", () => {
//   $(".modal-bidl").addClass("modal-active");
// });

// $(document).ready(function () {
//   const phoneMaskInputs = {}; // Объект для хранения масок телефона для каждой формы
//   const formInteractions = {}; // Для отслеживания, взаимодействовал ли пользователь с формой

//   $("form").each(function () {
//     const form = $(this);
//     const formId = form.attr("id");
//     formInteractions[formId] = {}; // Инициализируем объект для отслеживания взаимодействий

//     const phoneInput = form.find("#phone");
//     if (phoneInput.length) {
//       // Настраиваем маску для каждого телефона в отдельности
//       phoneMaskInputs[formId] = IMask(phoneInput[0], {
//         mask: "+7 (000) 000-00-00",
//       });
//     }

//     // Изначально делаем кнопку неактивной
//     form.find('button[type="submit"]').addClass("button-inactive");
//   });

//   // Функция для переподключения маски телефона
//   function resetPhoneMask(formId, phoneInput) {
//     if (phoneMaskInputs[formId]) {
//       phoneMaskInputs[formId].destroy(); // Уничтожаем старую маску
//     }
//     phoneMaskInputs[formId] = IMask(phoneInput[0], {
//       mask: "+7 (000) 000-00-00",
//     });
//   }

//   // Функция показа/скрытия ошибки
//   function toggleError(field, errorMessageId, message = "") {
//     const errorField = $(`#${errorMessageId}`);
//     field.toggleClass("err-form", message !== "");
//     message ? errorField.text(message).show() : errorField.hide();
//   }

//   // Универсальная валидация
//   function validateField(value, validators) {
//     for (const { test, message } of validators) {
//       if (!test(value)) return message;
//     }
//     return "";
//   }

//   // Валидаторы для каждого поля
//   const validators = {
//     name: [
//       { test: (val) => val.trim() !== "", message: "Это поле обязательно" },
//       {
//         test: (val) => /^[А-Яа-яЁёA-Za-z\s]+$/.test(val),
//         message: "Имя должно состоять только из букв и пробелов",
//       },
//     ],
//     phone: function (formId) {
//       const phoneMask = phoneMaskInputs[formId];
//       return [
//         {
//           test: () => phoneMask.unmaskedValue.length > 0,
//           message: "Это поле обязательно",
//         },
//         {
//           test: () => phoneMask.unmaskedValue.length === 10,
//           message: "Телефон должен содержать 10 цифр",
//         },
//       ];
//     },
//     email: [
//       { test: (val) => val.trim() !== "", message: "Это поле обязательно" },
//       {
//         test: (val) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val),
//         message: "Неверный формат email",
//       },
//     ],
//     question: [
//       { test: (val) => val.trim() !== "", message: "Это поле обязательно" },
//       {
//         test: (val) => val.length >= 10,
//         message: "Вопрос должен содержать не менее 10 символов",
//       },
//       {
//         test: (val) => val.length <= 100,
//         message: "Вопрос не должен превышать 100 символов",
//       },
//     ],
//   };

//   // Общая функция проверки поля
//   function validateAndShowError(field, fieldName, formId, force = false) {
//     const formInteraction = formInteractions[formId];
//     if (formInteraction[fieldName] || force) {
//       const fieldValidators =
//         typeof validators[fieldName] === "function"
//           ? validators[fieldName](formId)
//           : validators[fieldName];
//       const errorMessage = validateField(field.val(), fieldValidators);
//       toggleError(field, `${fieldName}-error`, errorMessage);
//       return !errorMessage;
//     }
//     return true;
//   }

//   // Функция для проверки всех полей конкретной формы и активации/деактивации кнопки
//   function checkFormValidity(form, force = false) {
//     const fieldsToValidate = form.find("input, textarea").filter(function () {
//       return validators[this.id] !== undefined;
//     });

//     let isFormValid = true;

//     fieldsToValidate.each(function () {
//       const field = $(this);
//       const formId = form.attr("id");
//       const fieldIsValid = validateAndShowError(
//         field,
//         field.attr("id"),
//         formId,
//         force
//       );
//       if (!fieldIsValid) {
//         isFormValid = false;
//       }
//     });

//     if (!validateConsent(form, force)) {
//       isFormValid = false;
//     }

//     const submitButton = form.find('button[type="submit"]');
//     if (isFormValid) {
//       submitButton.removeClass("button-inactive");
//     } else {
//       submitButton.addClass("button-inactive");
//     }

//     return isFormValid;
//   }

//   // Валидация чекбокса для каждой формы, если он присутствует
//   function validateConsent(form, force = false) {
//     const consentField = form.find("#dataConsent");
//     if (!consentField.length) {
//       return true; // Если чекбокс отсутствует, возвращаем true (валиден по умолчанию)
//     }

//     const formId = form.attr("id");
//     const consentChecked = consentField.is(":checked");

//     // Показываем ошибку только если чекбокс уже взаимодействован или принудительно
//     if (formInteractions[formId]["dataConsent"] || force) {
//       toggleError(
//         consentField,
//         "consent-error",
//         consentChecked
//           ? ""
//           : "Вы должны согласиться на обработку персональных данных"
//       );
//     }

//     return consentChecked;
//   }

//   // Обработчики ввода
//   $("form").on("input", "input, textarea", function () {
//     const form = $(this).closest("form");
//     const formId = form.attr("id");

//     if (validators[this.id]) {
//       formInteractions[formId][this.id] = true;
//       validateAndShowError($(this), this.id, formId);
//     }

//     checkFormValidity(form);
//   });

//   // Обработчик потери фокуса с поля
//   $("form").on("blur", "input, textarea", function () {
//     const form = $(this).closest("form");
//     const formId = form.attr("id");

//     formInteractions[formId][this.id] = true;

//     if (validators[this.id]) {
//       validateAndShowError($(this), this.id, formId);
//     }

//     checkFormValidity(form);
//   });

//   // Обработчик изменения состояния чекбокса
//   $("form").on("change", "#dataConsent", function () {
//     const form = $(this).closest("form");
//     const formId = form.attr("id");

//     // Отмечаем, что пользователь взаимодействовал с чекбоксом
//     formInteractions[formId]["dataConsent"] = true;

//     validateConsent(form);

//     checkFormValidity(form);
//   });

//   // Сброс данных о взаимодействии после успешной отправки формы
//   function resetFormInteractions(formId) {
//     formInteractions[formId] = {}; // Очищаем данные о взаимодействиях для формы
//   }

//   // Проверка при отправке формы
//   $("form").on("submit", function (event) {
//     event.preventDefault();
//     const form = $(this);
//     const formId = form.attr("id");

//     const isFormValid = checkFormValidity(form, true);

//     if (isFormValid) {
//       closeModal();
//       const modalId = $(this).find('button[type="submit"]').attr("data-modal");
//       if (modalId) {
//         $(`#${modalId}`).addClass("modal-active");
//         $("body").addClass("no-scroll");
//       }

//       form[0].reset();
//       resetFormInteractions(formId); // Сбрасываем данные о взаимодействиях после сброса формы

//       const phoneInput = form.find("#phone");
//       if (phoneInput.length) {
//         resetPhoneMask(formId, phoneInput);
//       }

//       form.find('button[type="submit"]').addClass("button-inactive");
//     }
//   });
// });
