<template>
    <div v-show="show" class="half-day-date-picker">
        <div class="bg"></div>
        <div class="select-date-container">
            <section class="picker-wrap">
                <div class="picker-toolbar">
                    <div class="btn cancel" @click="onCancel">取消</div>
                    <div class="btn confirm" @click="onConfirm">确定</div>
                </div>

                <mt-picker 
                    :valueKey="''"
                    :defaultIndex=10
                    :visibleItemCount=9
                    :slots="slots" 
                    @change="onValuesChange"
                ></mt-picker>
            </section>
        </div>
    </div>
</template>

<script>
import { Picker } from 'mint-ui'
import 'mint-ui/lib/style.css'

import {
    yearsArr,
    monthsArr,
    daysArr,
    noonArr,
    defalutYear,
    defalutMonth,
    defalutDay
} from '../tools/makeData.js'

export default {
    name: 'vue-halfday-datepicker',
    props: {
        show: {
            type: Boolean,
            required: true,
            default: () => null,
        }
    },
    components: {
        [Picker.name]: Picker,
    },
    data: function() {
        return {
            pickerValue: '',
            slots: [
                {
                    flex: 1,
                    values: yearsArr,
                    className: 'slot1',
                    textAlign: 'center',
                    defaultIndex: defalutYear,
                }, 
                {
                    flex: 1,
                    values: monthsArr,
                    className: 'slot2',
                    textAlign: 'center',
                    defaultIndex: defalutMonth
                },
                {
                    flex: 1,
                    values: daysArr,
                    className: 'slot3',
                    textAlign: 'center',
                    defaultIndex: defalutDay
                },
                {
                    flex: 1,
                    values: noonArr,
                    className: 'slot4',
                    textAlign: 'center',
                    defaultIndex: 0,
                }
            ],
        }
    },
    methods: {
        onOpenPicker(e) {
            this.$emit('onOpenPicker')
        },
        onConfirm(e) {
            this.$emit('onConfirm', this.pickerValue)
        },
        onCancel(e) {
            this.$emit('onCancel')
        },
        /** picker改变的处理 */
        onValuesChange(picker, values) {
            // 按照时间组合字符串
            const pickerValue = values[0] + '-' + values[1] + '-' + values[2] + ' ' + values[3]
            this.pickerValue = pickerValue
            this.$emit('onValuesChange', pickerValue)
        },
    },
}
</script>
<style scoped>
    .date-picker {
        display: flex;
        align-items: center;
    }
    .date-picker .flex1 {
            flex: 1;
    }
    .date-picker .arrow {
        position: relative;
    }
    .date-picker .arrow::after {
        content: '';
        position: absolute;
        right: 15px;
        top: 50%;
        width: 10px;
        height: 10px;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-top: transparent;
        border-left: transparent;
        transform: rotate(45deg) translateY(-100%);
    }
    .date-picker .text {
        font-size: 14px;
        padding-left: 15px;
    }
    .bg {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        filter: blur(20px);
        overflow: hidden;
    }
    .select-date-container {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 1001;
        width: 100%;
        max-height: 80%;
        background: #fff;
        overflow: hidden;
    }
    .picker-wrap {
        background: #fff;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        overflow: hidden;
    }
    .picker-toolbar {
        display: flex;
        position: relative;
    }
    .picker-toolbar::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #ccc;
        transform: scaleY(0.5);
    }
    .btn {
        flex:1;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 40px;
        color: #26a2ff;
    }
    .content {
        height: 300px;
    }
</style>