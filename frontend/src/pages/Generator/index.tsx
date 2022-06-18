import { Checkbox, FormControlLabel, Tooltip, Typography } from '@mui/material';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { SubmitButton } from '../../components/Buttons';
import useDebounce from '../../shared/hooks/useDebounce';
import colors from '../../styles/colors';
import {
  FormGroupStyled,
  GeneratorContentCard,
  GeneratorForm,
  GeneratorLengthInput,
  GeneratorPageContent,
  PasswordInputGenerated,
} from './styles';

interface PasswordGeneratorValues {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}
const GeneratorPage: React.FC = () => {
  const [passwordGenerated, setPasswordGenerated] = useState('');
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const tooltipDebounce = useDebounce<boolean>(tooltipOpen, 1000);

  const generatePassword = ({
    length,
    lowercase,
    numbers,
    uppercase,
    symbols,
  }: PasswordGeneratorValues) => {
    let wishList = '';
    lowercase && (wishList += 'abcdefghijklmnopqrstuvwxyz');
    numbers && (wishList += '0123456789');
    uppercase && (wishList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    symbols && (wishList += '!@#$%^&*()_+-=[]{}|;\':",./<>?');

    const result = Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => wishList[x % wishList.length])
      .join('');

    setPasswordGenerated(result);
  };

  const handleCopyPassword = () => {
    if (passwordGenerated) {
      navigator.clipboard.writeText(passwordGenerated);
      setTooltipOpen(true);
    }
  };

  useEffect(() => {
    setTooltipOpen(false);
  }, [tooltipDebounce]);

  return (
    <GeneratorPageContent>
      <GeneratorContentCard>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          title='Copiado para área de transferência'
          disableFocusListener
          disableHoverListener
          disableTouchListener
          open={tooltipOpen}
        >
          <PasswordInputGenerated onClick={handleCopyPassword}>
            <Typography variant='h5' component='h2'>
              {passwordGenerated}
            </Typography>
          </PasswordInputGenerated>
        </Tooltip>
        <Formik
          onSubmit={generatePassword}
          initialValues={
            {
              length: 10,
              uppercase: true,
              lowercase: true,
              numbers: true,
              symbols: true,
            } as PasswordGeneratorValues
          }
        >
          {({ setFieldValue, values }) => (
            <GeneratorForm>
              <FormControlLabel
                sx={{
                  margin: 0,
                }}
                control={
                  <GeneratorLengthInput
                    type='number'
                    variant='standard'
                    name='length'
                  />
                }
                label='Comprimento:'
                labelPlacement='start'
              />
              <FormGroupStyled>
                <FormControlLabel
                  name='uppercase'
                  control={
                    <Checkbox
                      checked={values.uppercase}
                      onChange={(e) =>
                        setFieldValue('uppercase', e.target.checked)
                      }
                    />
                  }
                  label='Letras maiúsculas (A-Z)'
                />
                <FormControlLabel
                  name='lowercase'
                  control={
                    <Checkbox
                      checked={values.lowercase}
                      onChange={(e) =>
                        setFieldValue('lowercase', e.target.checked)
                      }
                    />
                  }
                  label='Letras minúsculas (a-z)'
                />
                <FormControlLabel
                  name='numbers'
                  control={
                    <Checkbox
                      checked={values.numbers}
                      onChange={(e) =>
                        setFieldValue('numbers', e.target.checked)
                      }
                    />
                  }
                  label='Números (0-9)'
                />
                <FormControlLabel
                  name='symbols'
                  control={
                    <Checkbox
                      checked={values.symbols}
                      onChange={(e) =>
                        setFieldValue('symbols', e.target.checked)
                      }
                    />
                  }
                  label='Símbolos'
                />
              </FormGroupStyled>
              <SubmitButton $bgColor={colors.orange[500]}>
                Gerar senha
              </SubmitButton>
            </GeneratorForm>
          )}
        </Formik>
      </GeneratorContentCard>
    </GeneratorPageContent>
  );
};
export default GeneratorPage;
