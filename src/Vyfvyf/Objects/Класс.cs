﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Vyfvyf
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Класс.
    /// </summary>
    // *** Start programmer edit section *** (Класс CustomAttributes)

    // *** End programmer edit section *** (Класс CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлассE", new string[] {
            "Ладно as \'Ладно\'",
            "Дом as \'Дом\'",
            "Дом.Номер as \'Номер\'"}, Hidden=new string[] {
            "Дом.Номер"})]
    [MasterViewDefineAttribute("КлассE", "Дом", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Номер")]
    [View("КлассL", new string[] {
            "Ладно as \'Ладно\'",
            "Дом.Номер as \'Номер\'"})]
    public class Класс : ICSSoft.STORMNET.DataObject
    {
        
        private int fЛадно;
        
        private IIS.Vyfvyf.Дом fДом;
        
        // *** Start programmer edit section *** (Класс CustomMembers)

        // *** End programmer edit section *** (Класс CustomMembers)

        
        /// <summary>
        /// Ладно.
        /// </summary>
        // *** Start programmer edit section *** (Класс.Ладно CustomAttributes)

        // *** End programmer edit section *** (Класс.Ладно CustomAttributes)
        public virtual int Ладно
        {
            get
            {
                // *** Start programmer edit section *** (Класс.Ладно Get start)

                // *** End programmer edit section *** (Класс.Ладно Get start)
                int result = this.fЛадно;
                // *** Start programmer edit section *** (Класс.Ладно Get end)

                // *** End programmer edit section *** (Класс.Ладно Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Класс.Ладно Set start)

                // *** End programmer edit section *** (Класс.Ладно Set start)
                this.fЛадно = value;
                // *** Start programmer edit section *** (Класс.Ладно Set end)

                // *** End programmer edit section *** (Класс.Ладно Set end)
            }
        }
        
        /// <summary>
        /// Класс.
        /// </summary>
        // *** Start programmer edit section *** (Класс.Дом CustomAttributes)

        // *** End programmer edit section *** (Класс.Дом CustomAttributes)
        [PropertyStorage(new string[] {
                "Дом"})]
        [NotNull()]
        public virtual IIS.Vyfvyf.Дом Дом
        {
            get
            {
                // *** Start programmer edit section *** (Класс.Дом Get start)

                // *** End programmer edit section *** (Класс.Дом Get start)
                IIS.Vyfvyf.Дом result = this.fДом;
                // *** Start programmer edit section *** (Класс.Дом Get end)

                // *** End programmer edit section *** (Класс.Дом Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Класс.Дом Set start)

                // *** End programmer edit section *** (Класс.Дом Set start)
                this.fДом = value;
                // *** Start programmer edit section *** (Класс.Дом Set end)

                // *** End programmer edit section *** (Класс.Дом Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлассE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлассE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлассE", typeof(IIS.Vyfvyf.Класс));
                }
            }
            
            /// <summary>
            /// "КлассL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлассL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлассL", typeof(IIS.Vyfvyf.Класс));
                }
            }
        }
    }
}
